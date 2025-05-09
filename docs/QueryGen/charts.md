# Chart Visualization

This document outlines the data structures required for plotting various chart types within the application. The charting system expects data in a specific format, primarily defined by the `chartConfig` object and the `data` (which contains the actual data to be plotted).

## Overview

The response for a chart visualization will come in a specific format. The system determines the chart type and configuration (`chartConfig`) based on the query and data.

The `chartConfig` object can be found within the `content.debug_information` field of the response, and the data corresponding to `data` is found within the `content.text` field (as a JSON string) when a chart is generated. The customer will have to parse these fields and create their visualization layer to work with this format of data.

## Query Response Payload

When a query is processed that might result in a chart or a textual answer, the system constructs a response message. This message payload is detailed below.

### Sample Payload

```json
{
  "user": {
    "name": "User Name",
    "identity": "user-guid-abcde"
  },
  "chat_id": 789,
  "conversation_id": 1011,
  "role": "assistant",
  "type": "text",
  "content": {
    "text": "{\"data\":[{\"month\":\"January\",\"sales\":1000},{\"month\":\"February\",\"sales\":1200}]}",
    "debug_information": "{\"query\":\"show monthly sales\",\"analysis\":\"User wants to see sales figures per month\",\"chartConfig\":{\"chartType\":\"bar\",\"xAxis\":\"month\",\"yAxis\":[\"sales\"]}}"
  },
  "timestamp": 1678886400000
}
```

**Note:** The `content.text` field may contain a JSON string (as shown above when a chart is generated) or a plain text string for non-chart responses. The `content.debug_information` field is always a JSON string.

### Payload Fields

| Field                       | Type   | Description                                                                                                                                                                                                                                                         |
| --------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user`                      | Object | Contains user information.                                                                                                                                                                                                                                          |
| `user.name`                 | String | The name of the user, if available. Defaults to an empty string.                                                                                                                                                                                                    |
| `user.identity`             | String | A unique identifier for the user, if available. Defaults to an empty string.                                                                                                                                                                                        |
| `chat_id`                   | Number | Unique identifier for the chat session.                                                                                                                                                                                                                             |
| `conversation_id`           | Number | Unique identifier for the conversation.                                                                                                                                                                                                                             |
| `role`                      | String | Indicates the message sender. For these responses, it will always be `"assistant"`.                                                                                                                                                                                 |
| `type`                      | String | Type of message content. For these responses, it will typically be `"text"`.                                                                                                                                                                                        |
| `content`                   | Object | Contains the actual message content and debugging information.                                                                                                                                                                                                      |
| `content.text`              | String | The primary response. This can be a JSON string representing the data (if a chart is applicable) or a plain text answer.                                                                                                                                            |
| `content.debug_information` | String | A JSON string containing diagnostic data. This string includes: <br/> - `query`: The original user query. <br/> - `analysis`: An explanation of how the query was interpreted. <br/> - `chartConfig` (optional): The `chartConfig` object if a chart was generated. |
| `timestamp`                 | Number | Unix timestamp in milliseconds indicating when the response was generated.                                                                                                                                                                                          |

## `chartConfig` Object

The `chartConfig` object provides metadata about the chart and how the data should be interpreted. It is found as a JSON object within the `content.debug_information` field of the main response payload. It has the following structure:

```json
{
  "chartType": "string", // e.g., "line", "bar", "pie", "histogram", "scatter"
  "xAxis": "string", // Name of the column from your data to be used for the x-axis or categories/labels
  "yAxis": ["string"], // Array of column names from your data to be used for the y-axis or values
  "title": "string", // A suggested title for the chart
  "description": "string" // A brief explanation of what the chart is showing
}
```

**Fields:**

- `chartType`: Specifies the type of chart to render (e.g., "line", "area", "bar", "pie", "donut", "histogram", "scatter").
- `xAxis`: The name of the data column that will serve as the x-axis (for XY charts) or as labels/categories (for Pie/Donut charts).
- `yAxis`: An array of data column names that will provide the values for the y-axis (for XY charts, Scatter) or the segment values (for Pie/Donut, Histogram).
- `title`: A title for the chart, often generated based on the query or data.
- `description`: A short description of the chart's content.

## `data` Structure

The `data` is obtained by parsing the JSON string found in the `content.text` field of the main response payload (when a chart is applicable). When parsed, this JSON string reveals an object containing a `data` key. The value of this `data` key is an array, and its structure depends on the `chartConfig.chartType`.

```json
// Example structure of parsed content.text
{
  "data": [
    // ... array of data points, structure varies by chartType ...
  ]
}
```

Below are the specific `data` array structures for each supported chart type:

### 1. Line, Area, and Bar Charts

- **`chartConfig.chartType`**: `"line"`, `"area"`, `"bar"`
- **`chartConfig.xAxis`**: (string) Name of the column for the x-axis categories.
- **`chartConfig.yAxis`**: (array of strings) Name(s) of the column(s) for the y-axis values.
- **`data`**: An array of objects. Each object represents a data point.

  - It will have a key matching the `chartConfig.xAxis` string, with its corresponding value from the dataset.
  - For each string in `chartConfig.yAxis`, there will be a key in the object, with its corresponding numeric value (parsed as a float; non-numeric values become 0).

  **Example data from `content.text` (parsed):**
  (Assuming `chartConfig.xAxis: "month"`, `chartConfig.yAxis: ["sales", "expenses"]`)

  ```json
  [
    { "month": "January", "sales": 1000, "expenses": 400 },
    { "month": "February", "sales": 1200, "expenses": 450 },
    { "month": "March", "sales": 1100, "expenses": 420 }
  ]
  ```

### 2. Pie and Donut Charts

- **`chartConfig.chartType`**: `"pie"`, `"donut"`
- **`chartConfig.xAxis`**: (string) Name of the column for the slice labels.
- **`chartConfig.yAxis`**: (array of strings) Only the first element (`yAxis[0]`) is used. This string is the name of the column for the slice values.
- **`data`**: An array of objects. Each object represents a slice of the pie/donut.

  - `label`: The value from the column specified by `chartConfig.xAxis`.
  - `value`: The numeric value from the column specified by `chartConfig.yAxis[0]` (parsed as a float; non-numeric values become 0).

  **Example data from `content.text` (parsed):**
  (Assuming `chartConfig.xAxis: "category"`, `chartConfig.yAxis: ["amount"]`)

  ```json
  [
    { "label": "Electronics", "value": 5000 },
    { "label": "Clothing", "value": 3500 },
    { "label": "Groceries", "value": 2000 }
  ]
  ```

### 3. Histogram

- **`chartConfig.chartType`**: `"histogram"`
- **`chartConfig.xAxis`**: While present in `chartConfig`, it's not directly used to structure the `data` for a histogram. It might be used by the charting library for axis labeling if it represents the binned categories. The primary data for the histogram comes from `yAxis`.
- **`chartConfig.yAxis`**: (array of strings) Only the first element (`yAxis[0]`) is used. This string is the name of the column whose values will be used to generate the histogram distribution.
- **`data`**: An array of numbers. Each number is a value from the column specified by `chartConfig.yAxis[0]` (parsed as a float; non-numeric values become 0). The charting library will typically bin these values to create the histogram.

  **Example data from `content.text` (parsed):**
  (Assuming `chartConfig.yAxis: ["age"]` for a list of user ages)

  ```json
  [25, 30, 22, 30, 35, 28, 40, 25, 25, 30]
  ```

  _(The charting library will then process this array to create frequency bins, e.g., 20-29: 5, 30-39: 4, 40-49: 1)_

### 4. Scatter Chart

- **`chartConfig.chartType`**: `"scatter"`
- **`chartConfig.xAxis`**: (string) Name of the column for the x-coordinates of the points.
- **`chartConfig.yAxis`**: (array of strings) Only the first element (`yAxis[0]`) is used. This string is the name of the column for the y-coordinates of the points.
- **`data`**: An array of objects. Each object represents a point on the scatter plot.

  - `x`: The numeric value from the column specified by `chartConfig.xAxis` (parsed as a float; non-numeric values become 0).
  - `y`: The numeric value from the column specified by `chartConfig.yAxis[0]` (parsed as a float; non-numeric values become 0).

  **Example data from `content.text` (parsed):**
  (Assuming `chartConfig.xAxis: "study_hours"`, `chartConfig.yAxis: ["exam_score"]`)

  ```json
  [
    { "x": 2, "y": 65 },
    { "x": 3, "y": 75 },
    { "x": 1, "y": 50 },
    { "x": 4, "y": 85 }
  ]
  ```

## Data Transformation Notes

Key points regarding data transformation are:

- **Numeric Conversion**: Values for plotting (Y-axis, pie slices, histogram data, scatter coordinates) are parsed to floating-point numbers. Non-numeric values default to `0`.
- **Column Naming**: `chartConfig.xAxis` and `chartConfig.yAxis` use column names as they appear in the provided dataset. If SQL aliases are used (e.g., `SELECT user_age AS age`), `chartConfig` will use these aliases (e.g., `age`).

This document provides the data format. The customer is responsible for building their visualization layer to consume this data.
