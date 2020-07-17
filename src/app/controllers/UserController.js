import User from '../models/User';

class UserController {
  async store(req, res) {
    console.log(req.body);
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      res.status(400).json({ error: 'User already exists' });
    }
    const { id, name, email } = await User.create(req.body);
    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    // const user = User.findByPk(req.userId);

    return res.json({ ok: 'fdas' });
  }
}

export default new UserController();
