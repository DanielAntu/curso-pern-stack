INSERT INTO todo (description) VALUES($1) RETURNING *;

UPDATE todo SET description = $1 WHERE todo_id = $2;

DELETE FROM todo WHERE todo_id = $1;