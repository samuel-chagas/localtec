const express = require('express');
const Review = require('../models/Review');
const reviewController = require('../controllers/reviewController');
const authenticate = require('../routes/authRoutes');

const router = express.Router();

// Rota para listar todas as reviews
router.get('/', reviewController.getReviews); 

// Rota para criar uma nova review, apenas para usuários autenticados
router.post('/', authenticate, reviewController.createReview); 

// Rota para buscar reviews por ID de usuário
router.get('/user/:userId', reviewController.getReviewsByUser); 

// Rota para deletar uma review
router.delete('/:id', authenticate, async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findByPk(id);

    if (!review) {
      return res.status(404).send({ message: 'Review não encontrada' });
    }

    if (review.userId !== req.userId) {
      return res.status(403).send({ message: 'Você não tem permissão para deletar esta review' });
    }

    await review.destroy();
    res.send({ message: 'Review deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar review:', error);
    res.status(500).send({ message: 'Erro ao deletar review' });
  }
});

module.exports = router;
