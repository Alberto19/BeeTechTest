module.exports = {
    "port": process.env.PORT || 3001,
    "db": {
        "dev": {
            "database": "test",
            "user": "postgres",
            "pass": "190896",
            "host": "localhost",
	        "port": "5432",
        },
        "prd": {
            "database": "d8h6nu5b46uvi7",
            "user": "kjwihmbdrmutcr",
            "pass": "3c9b0ed6cd26bf3f70a10c859b769874aef22c387c7a3d3bbfb3d0c3820db068",
            "host": "ec2-107-20-230-243.compute-1.amazonaws.com",
	        "port": "5432",
        }
    }
};
