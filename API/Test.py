import sqlite3
from datetime import datetime, date, timedelta

def create_workout_data():
    number_of_workouts = int(input("How many workouts are being recorded? "))
    workout_dictionary = {}
    for i in range(number_of_workouts):
        if number_of_workouts == 1:
            date = input("What is the date of the workout? Please input the date in YYYY-MM-DD format. ")
        else:
            date = input('''What is the date of workout number ''' + str(i+1) + '''? 
            Please input the date in YYYY-MM-DD format. ''')
        number_of_exercises = int(input("How many exercises are in the workout? "))
        exercises = {}
        for i in range(number_of_exercises):
            rw_dict = {}
            exercise = input("What is exercise number " + str(i+1) + "? ")
            num_sets = int(input("How many working sets for this exercise? "))
            equal_rw = input("Are reps and weight the same throughout all working sets? (Yes / No) ").strip().lower()
            while equal_rw not in ('yes','no'):
                equal_rw = input('''Are reps and weight the same throughout all 
                                    working sets? (Yes / No) ''').strip().lower()
            if equal_rw in ('yes'):
                reps = int(input("How many reps for each set? "))
                weight = float(input("How much weight for each set? "))
                for i in range(num_sets):
                    rw_dict.update({i+1:{'reps':reps,'weight':weight}})
            elif equal_rw in ('no'):
                for i in range(num_sets):
                    reps = int(input("How many reps for set " + str(i+1) + "? "))
                    weight = float(input("How much weight for set " + str(i+1) + "? "))
                    rw_dict.update({i+1:{'reps':reps,'weight':weight}})
            exercises.update({exercise:rw_dict})
        workout_dictionary.update({date:exercises})
    print(workout_dictionary)
    return workout_dictionary

def create_table_in_sql():
    conn = sqlite3.connect('LyfterTestDatabase.db')
    c = conn.cursor()

    sql_statement = '''CREATE TABLE WeeklyMuscleSetsTest (
        WeekID INT PRIMARY KEY,
        Lats REAL,
        Lower_Back REAL,
        Trapezius REAL,
        Front_Deltoids REAL,
        Side_Deltoids REAL,
        Rear_Deltoids REAL,
        Pectorals REAL,
        Triceps REAL,
        Biceps REAL,
        Forearms REAL,
        Abdominals REAL,
        Glutes REAL,
        Hamstrings REAL,
        Quadriceps REAL,
        Calves REAL,
        Neck REAL
    ); '''

    c.execute(sql_statement)

    conn.commit()
    conn.close()


def testing_sqlite_vs_code():
    conn = sqlite3.connect('LyfterTestDatabase.db')
    c = conn.cursor()

    for week_id in list(range(53))[1:]:
        sql_statement = '''INSERT INTO WeeklyMuscleSetsTest VALUES ((:week_id),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);'''
        parameters = {'week_id':week_id}
        c.execute(sql_statement,parameters)

    conn.commit()
    conn.close()

# testing_sqlite_vs_code()
# create_table_in_sql()

conn = sqlite3.connect('LyfterTestDatabase.db')
c = conn.cursor()

sql_statement = '''SELECT Lats FROM WeeklyMuscleSetsTest'''
c.execute(sql_statement)
week = c.fetchall()

conn.commit()
conn.close()

print(week)