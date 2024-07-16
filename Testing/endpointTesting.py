import unittest
import requests

class TestCaloriesManagerEndpoints(unittest.TestCase):
    base_url = "http://127.0.0.1:3000"

    def test_about_endpoint(self):
        url = f'{self.base_url}/about/'
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        # Add more assertions based on the about endpoint structure
        self.assertTrue(isinstance(response.json(), list))  # Assuming it returns a list of developer objects

    def test_report_endpoint(self):
        url = f'{self.base_url}/report/?user_id=123123&year=2024&month=3'
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        # Add more assertions based on the report endpoint structure
        self.assertTrue('breakfast' in response.json())  # Check if 'breakfast' category exists in the response

    def test_addcalories_endpoint(self):
        url = f'{self.base_url}/addcalories/'
        data = {
            'user_id': 123123,
            'year': 2024,
            'month': 4,
            'day': 2,
            'description': 'milk 9',
            'category': 'lunch',
            'amount': 8
        }
        response = requests.post(url, json=data)
        self.assertEqual(response.status_code, 201)
        # Add more assertions based on the addcalories endpoint response

        # Optionally, you can capture the ID of the added item if returned
        # new_item_id = response.json().get('id')

    def test_report_endpoint_after_adding_calories(self):
        url = f'{self.base_url}/report/?user_id=123123&year=2024&month=4'
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        # Add more assertions based on the report endpoint structure after adding calories

        # Example: Check if 'lunch' category now has the added calorie item
        for item in response.json().get('lunch', []):
            if item['description'] == 'milk 9':
                self.assertEqual(item['amount'], 8)
                break
        else:
            self.fail("Calorie item 'milk 9' not found in 'lunch' category")

if __name__ == '__main__':
    unittest.main()
