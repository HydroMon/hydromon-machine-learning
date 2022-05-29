import csv
import datetime
import string
import random
import os
from email import header

# path
path = 'D:/MBKM/BANGKIT ML PATH/Repo/hydromon-machine-learning/dataset/ver2/'

# time generator
def addSecs(tm, secs):
    fulldate = datetime.datetime(100, 1, 1, tm.hour, tm.minute, tm.second)
    fulldate = fulldate + datetime.timedelta(seconds=secs)
    return fulldate.time()

# id generator
def generateId(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

# constant variable
date = datetime.date(2022, 5, 20)
a = datetime.datetime(100,1,1,11,34,0)
id = generateId()

# label 
labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
labelcode = {
    '0' : {
        'tds_lower' : 700,
        'tds_upper' : 1000,
        'light_lower' : 400,
        'light_upper' : 800,
        'ph_lower' : 5.5,
        'ph_upper' : 6.5
    },
    '1' : {
        'tds_lower' : 1000,
        'tds_upper' : 1500,
        'light_lower' : 400,
        'light_upper' : 800,
        'ph_lower' : 5.5,
        'ph_upper' : 6.5
    },
    '2' : {
        'tds_lower' : 700,
        'tds_upper' : 1000,
        'light_lower' : 800,
        'light_upper' : 1000,
        'ph_lower' : 5.5,
        'ph_upper' : 6.5
    },
    '3' : {
        'tds_lower' : 300,
        'tds_upper' : 700,
        'light_lower' : 400,
        'light_upper' : 800,
        'ph_lower' : 5.5,
        'ph_upper' : 6.5
    },
    '4' : {
        'tds_lower' : 700,
        'tds_upper' : 1000,
        'light_lower' : 400,
        'light_upper' : 800,
        'ph_lower' : 4,
        'ph_upper' : 5.5
    },
    '5' : {
        'tds_lower' : 700,
        'tds_upper' : 1000,
        'light_lower' : 400,
        'light_upper' : 800,
        'ph_lower' : 6.5,
        'ph_upper' : 8
    },
    '6' : {
        'tds_lower' : 1000,
        'tds_upper' : 1500,
        'light_lower' : 800,
        'light_upper' : 1000,
        'ph_lower' : 5.5,
        'ph_upper' : 6.5
    },
    '7' : {
        'tds_lower' : 1000,
        'tds_upper' : 1500,
        'light_lower' : 400,
        'light_upper' : 800,
        'ph_lower' : 4,
        'ph_upper' : 5.5
    },
    '8' : {
        'tds_lower' : 1000,
        'tds_upper' : 1500,
        'light_lower' : 400,
        'light_upper' : 800,
        'ph_lower' : 6.5,
        'ph_upper' : 8
    },
    '9' : {
        'tds_lower' : 1000,
        'tds_upper' : 1500,
        'light_lower' : 800,
        'light_upper' : 1000,
        'ph_lower' : 4,
        'ph_upper' : 5.5
    },
    '10' : {
        'tds_lower' : 1000,
        'tds_upper' : 1500,
        'light_lower' : 800,
        'light_upper' : 1000,
        'ph_lower' : 6.5,
        'ph_upper' : 8
    },
    '11' : {
        'tds_lower' : 300,
        'tds_upper' : 700,
        'light_lower' : 800,
        'light_upper' : 1000,
        'ph_lower' : 5.5,
        'ph_upper' : 6.5
    },
    '12' : {
        'tds_lower' : 700,
        'tds_upper' : 1000,
        'light_lower' : 800,
        'light_upper' : 1000,
        'ph_lower' : 4,
        'ph_upper' : 5.5
    },
    '13' : {
        'tds_lower' : 700,
        'tds_upper' : 1000,
        'light_lower' : 800,
        'light_upper' : 1000,
        'ph_lower' : 6.5,
        'ph_upper' : 8
    },
    '14' : {
        'tds_lower' : 300,
        'tds_upper' : 700,
        'light_lower' : 800,
        'light_upper' : 1000,
        'ph_lower' : 4,
        'ph_upper' : 5.5
    },
    '15' : {
        'tds_lower' : 300,
        'tds_upper' : 700,
        'light_lower' : 800,
        'light_upper' : 1000,
        'ph_lower' : 6.5,
        'ph_upper' : 8
    },
    '16' : {
        'tds_lower' : 300,
        'tds_upper' : 700,
        'light_lower' : 400,
        'light_upper' : 800,
        'ph_lower' : 4,
        'ph_upper' : 5.5
    },
    '17' : {
        'tds_lower' : 300,
        'tds_upper' : 700,
        'light_lower' : 400,
        'light_upper' : 800,
        'ph_lower' : 6.5,
        'ph_upper' : 8
    }
}

headers = ["Date", "Time", "ID", "TDS", "Light Intensity", "pH", "Air Temperature", "Humidity", "EC", "Label"]

for i, label in enumerate(labels):

    with open(os.path.join(path, f"dataset_label_{i}.csv"), "w") as d:
        parameter = csv.writer(d)
        parameter.writerow(headers)

        for x in range(0, 1000):
            # increase time
            time = addSecs(a, 5)
            a = time
            
            # get lower and upper limit
            tds_upper = labelcode[str(labels[i])]['tds_upper']
            tds_lower = labelcode[str(labels[i])]['tds_lower']

            light_upper = labelcode[str(labels[i])]['light_upper']
            light_lower = labelcode[str(labels[i])]['light_lower']

            ph_upper = labelcode[str(labels[i])]['ph_upper']
            ph_lower = labelcode[str(labels[i])]['ph_lower']

            # generate random values
            tds = random.randint(tds_lower, tds_upper)
            light_intensity = random.randint(light_lower, light_upper)
            ph = round(random.uniform(ph_lower, ph_upper), 3)
            
            # in normal condition
            air_temperature = random.randint(20, 40)
            humidity = random.randint(0, 100)
            ec = round(random.uniform(2, 3.5), 3)
        
            parameter_list = [[date, time, id, tds, light_intensity, ph, air_temperature, humidity, ec, label]]

            parameter.writerows(parameter_list)
        print(f"Success generate label {i}")
