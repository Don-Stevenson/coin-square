// serverless function that returns a quicktrade link in json

export function handler(event, context, callback) {
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "https://quick-trade.ca/",
    }),
  });
}
