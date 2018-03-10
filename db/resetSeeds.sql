USE burgers_db;

DELETE FROM burgers WHERE id>5;

UPDATE burgers
SET devoured=false
WHERE devoured=true;