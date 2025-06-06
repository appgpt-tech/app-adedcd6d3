//Source code generated by AppGPT (www.appgpt.tech)
let data: any = {
  defaultData: {
    User: [
      {
        id: 1,
        name: 'Aarav Mehta',
        email: 'aarav.mehta@email.com',
        password: 'Passw0rd!23',
      },
      {
        id: 2,
        name: 'Priya Sharma',
        email: 'priya.sharma@email.com',
        password: 'Secure@456',
      },
      {
        id: 3,
        name: 'Rohan Gupta',
        email: 'rohan.gupta@email.com',
        password: 'Gupta#789',
      },
      {
        id: 4,
        name: 'Sneha Patel',
        email: 'sneha.patel@email.com',
        password: 'Sneha$321',
      },
      {
        id: 5,
        name: 'Vikram Singh',
        email: 'vikram.singh@email.com',
        password: 'Vikram!654',
      },
    ],
    Expense: [
      {
        id: 1,
        amount: 1200.5,
        date: '2024-06-10T14:23:00Z',
        description: 'Monthly rent payment via HDFC Bank',
        categoryId: 1,
        bankAccountId: 2,
      },
      {
        id: 2,
        amount: 350.75,
        date: '2024-06-11T09:15:00Z',
        description: 'Grocery shopping at Big Bazaar',
        categoryId: 2,
        bankAccountId: 1,
      },
      {
        id: 3,
        amount: 89.99,
        date: '2024-06-12T18:45:00Z',
        description: 'Dinner at Urban Tadka',
        categoryId: 3,
        bankAccountId: 3,
      },
      {
        id: 4,
        amount: 599,
        date: '2024-06-13T12:30:00Z',
        description: 'Electricity bill payment',
        categoryId: 4,
        bankAccountId: 4,
      },
      {
        id: 5,
        amount: 150,
        date: '2024-06-14T16:10:00Z',
        description: 'Movie tickets at PVR Cinemas',
        categoryId: 5,
        bankAccountId: 2,
      },
    ],
    Bankaccount: [
      { id: 1, bankName: 'HDFC Bank', accountNumber: '501002345678' },
      { id: 2, bankName: 'ICICI Bank', accountNumber: '123456789012' },
      { id: 3, bankName: 'State Bank of India', accountNumber: '987654321098' },
      { id: 4, bankName: 'Axis Bank', accountNumber: '456789123456' },
      { id: 5, bankName: 'Kotak Mahindra Bank', accountNumber: '789012345678' },
    ],
    Smsmessage: [
      {
        id: 1,
        sender: 'AXISBANK',
        messageBody:
          'INR 2,500.00 debited from A/c XX1234 on 2024-06-13. Avl bal: INR 15,000.00. Info: Amazon purchase. If not you, call 1800-209-1234.',
        receivedAt: '2024-06-13T14:23:11',
        processed: false,
      },
      {
        id: 2,
        sender: 'HDFCBANK',
        messageBody:
          'Rs. 1,200 withdrawn using ATM from A/c XX5678 on 2024-06-12. Avl bal: Rs. 8,300.00. If not done by you, contact branch immediately.',
        receivedAt: '2024-06-12T09:10:45',
        processed: true,
      },
      {
        id: 3,
        sender: 'SBIINB',
        messageBody:
          'Your A/c XX4321 is debited by Rs. 3,450.00 on 2024-06-11 via UPI to PAYTM. Avl bal: Rs. 12,500.00.',
        receivedAt: '2024-06-11T19:05:30',
        processed: false,
      },
      {
        id: 4,
        sender: 'ICICIBANK',
        messageBody:
          'Rs. 600.00 spent on ICICI Debit Card XX7890 at Big Bazaar on 2024-06-10. Avl bal: Rs. 5,400.00.',
        receivedAt: '2024-06-10T16:42:18',
        processed: true,
      },
      {
        id: 5,
        sender: 'KOTAKB',
        messageBody:
          'INR 950.00 debited from A/c XX2468 on 2024-06-09 towards Swiggy. Avl bal: INR 3,200.00.',
        receivedAt: '2024-06-09T12:15:02',
        processed: false,
      },
    ],
    Category: [
      {
        id: 1,
        name: 'Groceries',
        description:
          'Expenses for food, beverages, and household supplies purchased from supermarkets or grocery stores.',
      },
      {
        id: 2,
        name: 'Utilities',
        description:
          'Monthly bills for electricity, water, gas, internet, and other essential services.',
      },
      {
        id: 3,
        name: 'Transportation',
        description:
          'Costs related to commuting, fuel, public transport, ride-sharing, and vehicle maintenance.',
      },
      {
        id: 4,
        name: 'Dining Out',
        description:
          'Money spent at restaurants, cafes, fast food, and takeout services.',
      },
      {
        id: 5,
        name: 'Entertainment',
        description:
          'Expenses for movies, concerts, subscriptions, hobbies, and recreational activities.',
      },
    ],
  },
};
export default data;
