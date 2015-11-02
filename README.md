# bella

Bella is a software that makes labeling naural language datasets less painful.

### Motivation

Many tasks in Natural Language Processing (NLP) require labeled data. Examples include Sentiment Analysis, Text Categorization, Entity Linking and POS tagging. But creating and verifying labeled data sets can be a painful process. It's often done in Google spreadsheets, raw CSV files or through services such as Amazon Mechanical Turk. Typically the output of such a process is then transformed and imported before it can be fed into a Machine Learning system, and may require a full ETL pipeline if you need to re-label any of the data.

Building a Machine Learning classifier typically happens in a [Build-Measure-Learn](http://steveblank.com/2015/05/06/build-measure-learn-throw-things-against-the-wall-and-see-if-they-work/) cycle. You build a classifier, measure its performance, learn about what kind of mistakes it makes, and then improve it. I found that most my time is typically spent measuring and learning, which involves collecting, inspecting, and labeling of training and test data.

bella aims to make evaluation and labeling less painful through 1. A graphical user inteface 2. A database backend to manage labeled data. The GUI allows labeling and tagging of data using convenient keyboard shortcuts or swipe gestures. It also supports data browsing and visualizing metrics related to classification accuracy/recall. The database backend manages labeled data and can export to various common formats.

### Use Cases

- You have just collected an unlabeled data, by crawling a website for example, and need to label it. You could do this in a spreadsheet, but using bella will be faster and more covenient.

- You are hiring people to perform data labeling. Instead of going them instructions on how to work with spreadsheets and CSV files, they can use bella to label data for you. 

- You trained a classifier and need to evaluate its performance. By loading predictions and labels into bella you can easily visualize results (e.g. confusion matrices) or view classification metrics such as accuracy, recall and F1 scores.

### Example Usage

### Architecture

