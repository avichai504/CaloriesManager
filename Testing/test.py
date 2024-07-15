import requests
import sys

filename = input("filename=")

# line = "http://ec2-16-16-205-202.eu-north-1.compute.amazonaws.com:3000"
line = "http://127.0.0.1:3000"

with open(filename, "w") as output:
    sys.stdout = output

    print(line)
    print()

    print("Testing getting the about")
    print("-------------------------")

    try:
        text = ""
        # Getting details of team manager
        url = line + "/about/"
        data = requests.get(url)

        print(f"url={url}")
        print(f"data.status_code={data.status_code}")
        print(data.content)
        print(f"data.text={data.text}")

        json_data = data.json()
        print(json_data)

        if len(json_data) > 0:
            print(f"firstname={json_data[0]['firstname']}")
            print(f"lastname={json_data[0]['lastname']}")
            print(f"id={json_data[0]['id']}")

            text = f"{json_data[0]['firstname']} {json_data[0]['lastname']} {json_data[0]['id']}"
            print(text)

    except Exception as e:
        print("Problem")
        print(e)

    print()
    print("Testing getting the report - 1")
    print("------------------------------")

    try:
        text = ""
        # Getting the report
        url = line + "/report/?user_id=123123&year=2024&month=3"
        data = requests.get(url)

        print(f"url={url}")
        print(f"data.status_code={data.status_code}")
        print(data.content)
        print(f"data.text={data.text}")

        json_data = data.json()
        text = str(json_data["dinner"])
        print(text)

    except Exception as e:
        print("Problem")
        print(e)

    print()
    print("Testing adding calorie consumption")
    print("----------------------------------")

    try:
        text = ""
        # Adding calorie consumption
        url = line + "/addcalories/"
        payload = {
            'user_id': 123123,
            'year': 2024,
            'month': 4,
            'day': 2,
            'description': 'milk 9',
            'category': 'lunch',
            'amount': 8
        }
        data = requests.post(url, json=payload)

        print(f"url={url}")
        print(f"data.status_code={data.status_code}")
        print(data.content)
        print(f"data.text={data.text}")

        # If needed, handle the response JSON here
        # json_data = data.json()
        # id = json_data["id"]
        # print(f"id of the added item is {id}")

    except Exception as e:
        print("Problem")
        print(e)

    print()
    print("Testing getting the report - 2")
    print("------------------------------")

    try:
        text = ""
        # Getting the report
        url = line + "/report/?user_id=123123&year=2024&month=4"
        data = requests.get(url)

        print(f"url={url}")
        print(f"data.status_code={data.status_code}")
        print(data.content)
        print(f"data.text={data.text}")

        json_data = data.json()
        text = str(json_data["dinner"])
        print(text)

    except Exception as e:
        print("Problem")
        print(e)

    print()
