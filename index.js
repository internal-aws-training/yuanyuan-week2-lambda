exports.handler = async function(event, context) {
  console.log("Environment variables:\n" + JSON.stringify(process.env, null, 2))
  console.log("Event:\n" + JSON.stringify(event, null, 2))
  console.log("Context:\n" + JSON.stringify(context, null, 2))
  return "Hello World!"
}
