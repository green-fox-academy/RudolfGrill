'use strict';

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

type Account = {
  clientName: string,
  accountNumber: number,
  balance: number
}

type AccountPair = [
  string,
  number
]

const accounts: Account[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

function getNameAndBalance(accountNumber: number): AccountPair {
  const filteredAccounts: Account[] = accounts.filter(function (account: Account): boolean {
    return account.accountNumber == accountNumber;
  });
  // Log "404 - account not found" if any of the account numbers don't exist to the console.
  if (filteredAccounts.length == 0) {
    console.log('404 - account not found')
    return
  }

  const foundAccount: Account = filteredAccounts[0]

  return [foundAccount.clientName, foundAccount.balance]
}

function findAccount(accounts: Account[], accountNumber: number): Account {
  const filteredAccounts: Account[] = accounts.filter(function (account: Account): boolean {
    return account.accountNumber == accountNumber;
  });
  // Log "404 - account not found" if any of the account numbers don't exist to the console.
  if (filteredAccounts.length == 0) {
    throw new Error('404 - account not found');
  }
  return filteredAccounts[0];
}

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//

function transferAmount(accounts: Account[], fromAccountNumber: number, toAccountNumber: number,
  amount: number): void {
  let fromAccount: Account;
  let toAccount: Account;
  try {
    fromAccount = findAccount(accounts, fromAccountNumber);
    toAccount = findAccount(accounts, toAccountNumber);
  } catch (e) {
    console.log(e.message);
    return;
  }
  fromAccount.balance = fromAccount.balance - amount;
  toAccount.balance = toAccount.balance + amount;
}

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};

console.log(transferAmount(accounts, 43546731, 23456311, 500.0));

console.log(getNameAndBalance(43546731));
console.log(findAccount(accounts, 11234543));
console.log(transferAmount(accounts, 11234543, 43546731, 203004099.2));
console.log(accounts);
console.log(transferAmount(accounts, 23456311, 43546731, 1353600.0));
console.log(accounts);
