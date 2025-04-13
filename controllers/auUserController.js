const service = require('../services/auUserService');

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await service.getAll();
      res.json(data);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },

  getByCreatorId: async (req, res) => {
    try {
      const userId = req.params.userId;
      const auUsers = await AuUserService.getByCreatorId(userId);
      res.json(auUsers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  

  getById: async (req, res) => {
    try {
      const data = await service.getById(req.params.id);
      res.json(data);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },

  create: async (req, res) => {
    try {
      const newItem = await service.create(req.body);
      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await service.update(req.params.id, req.body);
      res.json(updated);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await service.delete(req.params.id);
      res.json(result);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
};
