{"files":[{"id":"ca406dc4-d44f-438b-b36c-8ef7f4d3bcbb","name":"TimeFunctions","type":"server_js","source":"/**\n * Number of complete days between two dates\n *\n * @param {Date} StartDate\n * @param {Date} EndDate\n * @return {string} Number of complete days between StartDate end EndDate\n */\nfunction dayDiff(StartDate, EndDate) {\n    return Math.floor((EndDate - StartDate) / (1000 * 60 * 60 * 24));\n}\n\n/**\n * Number of complete hours between two dates\n *\n * @param {Date} StartDate\n * @param {Date} EndDate\n * @return {string} Number of complete hours between StartDate end EndDate\n */\nfunction hourDiff(StartDate, EndDate) {\n    return Math.floor((EndDate - StartDate) / (1000 * 60 * 60));\n}\n\n/**\n * Number of complete minutes between two dates\n *\n * @param {Date} StartDate\n * @param {Date} EndDate\n * @return {string} Number of complete minutes between StartDate end EndDate\n */\nfunction minuteDiff(StartDate, EndDate) {\n    return Math.floor((EndDate - StartDate) / (1000 * 60));\n}\n\n/**\n * Number of complete seconds between two dates\n *\n * @param {Date} StartDate\n * @param {Date} EndDate\n * @return {string} Number of complete seconds between StartDate end EndDate\n */\nfunction secondDiff(StartDate, EndDate) {\n    return Math.floor((EndDate - StartDate) / (1000));\n}\n"},{"id":"5b2a4138-b4dd-480e-aa0f-62a5c6bdbe91","name":"test","type":"server_js","source":"/**\n * \n */\n"}]}