const express = require('express');
const bcrypt = require('bcrypt');
const { MenuItem, Order, User } = require('../models/index.js');

exports.signIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { name: username } });

    if (user && await user.password === password) {
      req.session.userId = user.id;
      req.session.role = user.role;

      res.status(200).json({ message: 'Success' });
    } else {
      res.status(401).send('Неверное имя пользователя или пароль');
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).send('Ошибка при входе');
  }
};

exports.signUp = async (req, res) => {
  const { username, password, confirm_password, role } = req.body;

  if (password !== confirm_password) {
    return res.status(400).send('Passwords do not match');
  }

  try {
    const newUser = await User.create({
      name: username,
      password,
      role
    });

    const userId = newUser.id;
    await User.update({ employeeID: userId }, {
      where: { id: userId }
    });

    req.session.userId = newUser.id;
    req.session.role = newUser.role;

    res.status(201).send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during registration');
  }
};
