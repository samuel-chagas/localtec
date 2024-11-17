const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll(); 
    res.json(reviews);
  } catch (error) {
    console.error('Erro ao buscar reviews:', error.message, error.stack);
    res.status(500).json({ message: 'Erro ao buscar reviews', error: error.message });
  }
};

exports.createReview = async (req, res) => {
  const { content, rating } = req.body;

  try {
    // Verifica se os campos obrigatórios foram preenchidos
    if (!content || !rating) {
      return res.status(400).json({ message: 'Preencha todos os campos obrigatórios' });
    }

    // Verifica se o usuário está autenticado
    if (!req.userId) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    // Criação da review associada ao usuário autenticado
    const newReview = await Review.create({ content, rating, userId: req.userId });
    res.status(201).json({ message: 'Review criada com sucesso', review: newReview });
  } catch (error) {
    console.error('Erro ao criar review:', error.message, error.stack);
    res.status(500).json({ message: 'Erro ao criar review', error: error.message });
  }
};
