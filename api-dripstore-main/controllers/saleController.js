
const { Sale } = require('../models');

const getAllSales = async (request, response) => {
  try {
    const sales = await Sale.findAll();
    response.status(200).json(sales);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const getSaleById = async (request, response) => {
  try {
    const { id } = request.params;
    const sale = await Sale.findByPk(id);
    if (sale) {
      response.status(200).json(sale);
    } else {
      response.status(404).json({ message: 'Venda não encontrada' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createSale = async (request, response) => {
  try {
    const sale = await Sale.create(request.body);
    response.status(201).json(sale);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const updateSale = async (request, response) => {
  try {
    const { id } = request.params;
    const [updated] = await Sale.update(request.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedSale = await Sale.findByPk(id);
      response.status(200).json(updatedSale);
    } else {
      response.status(404).json({ message: 'Venda não encontrada' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const deleteSale = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Sale.destroy({
      where: { id: id }
    });
    if (deleted) {
      response.status(204).send();
    } else {
      response.status(404).json({ message: 'Venda não encontrada' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

module.exports = {
    getAllSales,
    getSaleById,
    createSale,
    updateSale,
    deleteSale
};
