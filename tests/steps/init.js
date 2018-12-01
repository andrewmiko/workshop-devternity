let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.AWS_REGION = "us-east-1"
  process.env.TEST_ROOT = "https://qo0nqso709.execute-api.us-east-1.amazonaws.com/dev"
  process.env.restaurants_api   = "https://qo0nqso709.execute-api.us-east-1.amazonaws.com/dev"
  process.env.restaurants_table = "restaurants-dev-devternity"
  process.env.order_events_stream = 'orders-dev-devternity'
  process.env.restaurant_notification_topic = 'restaurants-dev-devternity'
  
  initialized = true
}

module.exports = {
  init
}