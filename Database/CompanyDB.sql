USE CompanyDB;


CREATE TABLE Staff (
    StaffID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Role VARCHAR(50),
    Contact VARCHAR(100)

);

CREATE TABLE Clients (
    ClientID INT AUTO_INCREMENT PRIMARY KEY,
    ClientName VARCHAR(100) NOT NULL,
    Email VARCHAR(100),
    Phone VARCHAR(20),
    AssignedStaffID INT,
    FOREIGN KEY (AssignedStaffID) REFERENCES Staff(StaffID)
);


-- Staff
INSERT INTO Staff (Name, Role, Contact) VALUES
('Merritt Johnson', 'Manager', 'merritt@company.com'),
('Nate Kiflemariam', 'Developer', 'nate@company.com');



-- Clients
INSERT INTO Clients (ClientName, Email, Phone, AssignedStaffID) VALUES
('Acme Corp', 'contact@acmecorp.com', '555-1234', 1),
('Beta LLC', 'info@betallc.com', '555-5678', 2);

SELECT * FROM Staff;
SELECT * FROM Clients;

ALTER TABLE Staff
ADD COLUMN CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE Clients
ADD COLUMN CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT unique_client_email UNIQUE (Email);

ALTER TABLE Staff
ADD CONSTRAINT unique_staff_email UNIQUE (Contact);

ALTER TABLE Clients
ADD CONSTRAINT unique_client_email UNIQUE (Email);













