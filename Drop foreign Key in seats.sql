ALTER TABLE payment_transaction
DROP FOREIGN KEY FKc8vyplfkvpipmcx118hapcla8;

ALTER TABLE payment_transaction
ADD CONSTRAINT FKc8vyplfkvpipmcx118hapcla8
FOREIGN KEY (ticket_id)
REFERENCES ticket(ticket_id)
ON DELETE CASCADE; -- or ON UPDATE CASCADE