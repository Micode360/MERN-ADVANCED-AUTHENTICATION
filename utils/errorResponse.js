class errorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}


// This this where the error is outputing the error message and status
module.exports = errorResponse;