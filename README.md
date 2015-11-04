# bella

bella is a tool that helps managing, labeling and evaluating natural language datasets.

### Motivation

Many tasks in Natural Language Processing (NLP) require labeled data. Examples include Sentiment Analysis, Text Categorization, Entity Linking and POS tagging. But creating and verifying such labeled data can be a painful process that is often done in Google Spreadsheets, raw CSV files or through external services such as Amazon Mechanical Turk. Typically the output of such a process is then transformed in some way before it can be fed into a Machine Learning system. If you want to re-label any of the data you may even need a full ETL pipeline.

Building a Machine Learning model often happens in a [Build-Measure-Learn](http://steveblank.com/2015/05/06/build-measure-learn-throw-things-against-the-wall-and-see-if-they-work/) cycle. You build the model, measure its performance, learn about what kind of mistakes it makes, and then improve it. I found that most my time is spent measuring and learning, which involves collecting, inspecting, and labeling training and test data.

bella aims to make evaluation and labeling less painful by providing: 

1. A graphical user interface
2. A database backend to manage labeled data

The GUI allows you to label and tag of data through convenient keyboard shortcuts and swipe gestures and visualize metrics, confusion matrices, and more. The database backend manages labeled data and exports it into various formats.

### Use Cases

- You have just collected unlabeled data, by crawling a website for example, and need to label it. You could do this in a spreadsheet, but using bella is probably faster and more convenient.

- You are hiring people to perform data labeling. Instead of giving them instructions on how to work with spreadsheets and CSV files, you can point them to your bella project.

- You trained a classifier and need to evaluate its performance. By loading predictions and labels into bella you can easily visualize results (e.g. confusion matrices) and view classification metrics such as accuracy, recall and F1 scores.

### Example Usage

Let's assume you've collected a dataset of raw Tweets that you want to label as positive, negative, or neutral. In addition, you may want to flag ads and retweets so that you can remove them from the data later on. In CSV format, a row  of your data may look like this:

```
id,author,time,text
1337,@dennybritz,1446545410172,"You must check out bella!!1"
```

To configure the bella project we need to specify the following:

- A unique name for the project
- How bella should display an item in the GUI (as a `Post`)
- Labels we want to support (positive, negative, neutral)
- Tags we want to support (ad, retweet)

Note that this configuration is dynamic. You can change at any time, to add additional tags for example.

The configuration can be specified using a `.bellacfg` file in YAML format as follows:

```yaml
---

name: my-project
display:
  type: Post
  parameters:
    text: text
    author: author
    time: time
labels: 
  - positive
  - neutral
  - negative
tags:
  - ad
  - retweet
```

You can also write the configuration in Javascript. This gives you additional flexibility. Documentation for this is TODO.


### Display Types

Internally, each display type is implemented as a React component.

#### `Post`

A post is a raw body of text with an associated author and timestamp. Social media posts, reviews, and blog posts fit well into the `Post` category. 

**Properties:**

- text: string (required)
- author: string
- time: unix timestamp or ISO 8601 date


### Importing Data

You can import data using the command line or the GUI. On the command line:


```bash
./bin/bella-import --format csv --colums "id,author,time,text" --id 0 ./data/data.csv
```

##### `csv`

Reads from a CSV file.

Properties:

- columns: A comma-separated list of column names. Defaults to `1,2,3,...`.
- id: The 0-based column index of the id column. If not provided bella will generate a new unique id for each record.


#### `csv-with-headers`

Same as `csv`, but the column names are automatically read from the first row.


#### `json`

Reads a valid JSON array where each element represents one record.

Properties:

- id: Map a specific JSON key to the id column. If the JSON object contain an `id` key it'll be mapped by default. If not provided and no `id` key is found, bella will generate a unique id for each record.

#### `json-sequence`

Same as `json`, but parses a newline-separated list of JSON objects instead of a JSON array.



### Architecture

Bella never modifies the original data. It only adds metadata such as tags and labels.

#### Projects

Each bella project corresponds to a folder that contains a `.bellarc` file.

#### Storage Layer

- All data is stored in a [RethinkDB](http://rethinkdb.com/) database. Each record has column names as specified in the input definition, plus additional `_label`, `_tags`, `_prediction`,=, `_createdAt` and `_updatedAt` columns.
- The `events` table keeps track of all actions performed on the record, e.g. changes in labels.
- The `comments` table stores comments for all items.



### Configuration Reference

TODO