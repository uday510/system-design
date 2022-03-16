-- Sum the number of payments for each user.
SELECT customer_name, count(*)
FROM payments
GROUP BY customer_name
ORDER BY count DESC;

-- Sum the payments amount for each month
SELECT sum(amount), extract(year from processed_at) as year, extract(month from processed_at) as month
FROM payments
GROUP BY month, year
ORDER BY sum DESC;

-- Sum the payment amounts for each month for each user.
SELECT customer_name, sum(amount), extract(year from processed_at) as year, extract(month from processed_at) as month
FROM payments
GROUP BY customer_name, month, year
ORDER BY customer_name DESC;

-- --Find largest single-user payments for each month.
SELECT max(amount), year, month
FROM (
    SELECT customer_name, sum(amount) as amount, extract(year from processed_at) as year, extract(month from processed_at) as month
    FROM payments
    GROUP BY customer_name, month, year  
) AS monthly_sums
GROUP BY year, month;


-- Transfer 100 from Clement to Antoine.
BEGIN TRANSACTION;
UPDATE balances SET balance = balance - 100 WHERE username = 'clement';
UPDATE balances SET balance = balance + 100 WHERE username = 'antoine';
COMMIT;
