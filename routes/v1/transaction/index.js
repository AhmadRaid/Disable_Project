const express = require('express');

// const config = require('config');
// const {
//   offsetAndLimitAndSort,
// } = require('../../../validationSchema/offsetAndLimitAndSort');
// const {
//   addOrEditContact,
//   contactListing,
// } = require('../../../validationSchema/contact');
const controller = require('../../../app/controller/Transaction');
//const { validateRequest } = require('../../../../utils/validation');
//const isAuthenticated = require('../../../../utils/middleware/auth/auth');

const router = express.Router();

router.get(
    '/listing',
   // isAuthenticated,
   // [contactListing, offsetAndLimitAndSort, validateRequest],
    controller.getAllTransactions,
  );

router.post(
  '/add',
 // isAuthenticated,
 // [addOrEditContact, validateRequest],
  controller.addTransaction,
);
router.put(
  '/edit/:userId',
 // isAuthenticated,
 // [addOrEditContact, validateRequest],
  controller.editTransaction,
);
router.get(
  '/details/:userId',
 // isAuthenticated,
 // controller.viewContactDetails,
);
router.delete('/delete/:userId', /* isAuthenticated,*/ controller.deleteTransaction );


module.exports = router;
