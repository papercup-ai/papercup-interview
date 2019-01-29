import csv
import uuid
from random import randrange, choice
from datetime import timedelta, datetime

ORDERS_START_DATE = datetime.strptime('1/1/2018 1:30 PM', '%d/%m/%Y %I:%M %p')
ORDERS_END_DATE = datetime.strptime('31/12/2018 4:50 AM', '%d/%m/%Y %I:%M %p')
FAKE_ORDERS = 10000
ITEMS = ["Papercup", "Cup", "Chalice", "Glass", "Mug", "Bottle", "Bowl", "Teapot", "Tumbler"]
PRICES = [10., 20., 30., 21., 42., 40.0, 5.0, 15.0]
QUANTITIES = [1, 2, 5, 10]
CUSTOMERS = [uuid.uuid4() for i in range(100)]


def random_date(start, end):
    """
    This function will return a random datetime between two datetime
    objects.
    """
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_second = randrange(int_delta)
    return (start + timedelta(seconds=random_second)).strftime("%Y-%m-%dT%H:%M:%S.%fZ")


with open('cups_orders.csv', mode='w') as cups_orders_file:
    cups_writer = csv.writer(cups_orders_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    cups_writer.writerow(['date', 'order_id', 'item', 'price', 'quantity', 'total', 'customer_id'])

    for i in range(FAKE_ORDERS):
        order_date = random_date(ORDERS_START_DATE, ORDERS_END_DATE)
        order_id = uuid.uuid4()
        order_item = choice(ITEMS)
        order_item_price = choice(PRICES)
        order_quantity = choice(QUANTITIES)
        order_total = order_quantity * order_item_price
        customer_id = choice(CUSTOMERS)
        cups_writer.writerow([
            order_date,
            order_id,
            order_item,
            order_item_price,
            order_quantity,
            order_total,
            customer_id,
        ])
