
const { Order } = require('../models');

const getAllOrders = async (request, response) => {
  try {
    const orders = await Order.findAll();
    response.status(200).json(orders);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const getOrderById = async (request, response) => {
  try {
    const { id } = request.params;
    const order = await Order.findByPk(id);
    if (order) {
      response.status(200).json(order);
    } else {
      response.status(404).json({ message: 'Pedido não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createOrder = async (request, response) => {
  try {
    const order = await Order.create(request.body);
    response.status(201).json(order);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const updateOrder = async (request, response) => {
  try {
    const { id } = request.params;
    const [updated] = await Order.update(request.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedOrder = await Order.findByPk(id);
      response.status(200).json(updatedOrder);
    } else {
      response.status(404).json({ message: 'Pedido não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Order.destroy({
      where: { id: id }
    });
    if (deleted) {
      response.status(204).send();
    } else {
      response.status(404).json({ message: 'Pedido não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
};
