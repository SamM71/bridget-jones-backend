DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
  id INT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR (50) UNIQUE NOT NULL,
  content VARCHAR(1000),
  category VARCHAR(50),
  created TIMESTAMPTZ NOT NULL DEFAULT(CURRENT_TIMESTAMP),
  PRIMARY KEY (id)
);

INSERT INTO entries
  (title, content, category)
VALUES
  ('Hello', 'Is it me you are looking for?', 'Reflection'),
  ('Hey', 'Hey you you I do not like your girlfriend', 'Love life'),
  ('Quotes', 'I do not know how to use an apostrophe within single quotes', 'Work');