import validation from "express-validation";

export default function (err, req, res, next) {
  if (err instanceof validation.ValidationError) {
    return res.status(400).json({ errors: err.errors });
  }

  next();
};
