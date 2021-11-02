CREATE TABLE user_message(
    message_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    content VARCHAR NOT NULL,
    topic VARCHAR(30) NOT NULL,
    created_at DATETIME
);