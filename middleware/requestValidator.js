// request validators

const startRideValidator = (req, res, next) => {
  if (!req.query.lattitude || !req.query.longitude || isNaN(req.query.lattitude) || isNaN(req.query.longitude)) {
    // const error = new Error('Invalid Parameters !');
    // error.statusCode = 400;
    // throw error;
    res.json({
      message: "Invalid/Missing parameters"
    });
  }
  next();
};
const endRideValidator = (req, res, next) => {
  if (!req.query.lattitude || !req.query.longitude || isNaN(req.query.lattitude) || isNaN(req.query.longitude)) {
    // const error = new Error('Invalid Parameters !');
    // error.statusCode = 400;
    // throw error;
    res.json({
      message: "Invalid/Missing parameters"
    });
  }
  next();
};
const searchRideValidator = (req, res, next) => {
  if (
    !req.query.lattitude ||
    !req.query.longitude ||
    isNaN(req.query.lattitude)||
    isNaN(req.query.longitude ||
    !req.query.radius ||
    isNaN(req.query.radius)
    )) {
    // const error = new Error('Invalid Parameters !');
    // error.statusCode = 400;
    // throw error;
    res.json({
      message: "Invalid/Missing parameters"
    });
  }
  next();
};

module.exports = {
  startRideValidator,
  endRideValidator,
  searchRideValidator
};

