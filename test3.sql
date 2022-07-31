--@BLOCK
SELECT @fecha := DATE_SUB(CURDATE(),INTERVAL 18 YEAR);

--@BLOCK
SELECT u.name, u.birthdate, c.name
FROM Users u

RIGHT OUTER JOIN UsersXCustomers uxc
ON u.id = uxc.user_id

LEFT OUTER JOIN Customers c
ON uxc.customer_id = c.id

WHERE u.birthdate >= @fecha AND c.status = 1 AND u.status = 1

ORDER BY c.name ASC