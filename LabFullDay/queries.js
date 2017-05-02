var promise = require('bluebird');
var options = { promiseLib: promise };

var pgp = require('pg-promise')(options);

var connectionString = 'postgress://localhost:5432/contacts_db1';
var db = pgp(connectionString);

function createContact(req, res, next) {
    console.log(req.body)
    req.body.age = parseInt(req.body.age)
    db.none('insert into contacts(first, last, age, sex)' +
            'values(${first}, ${last}, ${age}, ${sex})', req.body).then(res.redirect('/'))
    .catch(function (err) {
      return next(err);
    });
};

function getAllContacts(req, res, next) {
    db.any('select * from contacts')
    .then(function(data){res.render('index', { title:'All Contacts', data:data})    
    })
}

function removeContact(req, res, next) {
    console.log('removed');
    let contactID = parseInt(req.params.id)
    db.result('delete from contacts where id = $1', contactID)
}

function updateContact(req, res, next) {
//    console.log('changed name');
//    let firstName = (req.body.first);
    db.none('UPDATE contacts set first = $1, where = $2',
              [req.body.first, parseInt(req.params.id)])
};

module.exports = {
    createContact: createContact,
    getAllContacts: getAllContacts,
    removeContact: removeContact,
    updateContact:updateContact
}