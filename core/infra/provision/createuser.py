# Run this script as `iam-mutator` role
import random
import string
import sys

try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

def randomString(stringLength=10):
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for i in range(stringLength))

def createUser(username):
    print(f'Creating user {username}...')
    iam = boto3.client('iam')
    try:
        iam.create_user(UserName=username)
        print(f'User {username} created.')
    except:
        print(f'User {username} probably already exists, not creating.')

def addConsolePermissionsForUser(username):
    #TODO: Check if login permissions exist. If so, skip.
    print(f'Adding login permissions for {username}...')
    iam = boto3.client('iam')
    password = randomString()
    iam.create_login_profile(UserName=username,Password=password,PasswordResetRequired=True)
    print(f'Added login permissions for {username}. Password is {password}.')

if __name__ == '__main__':
    usernames = [sys.argv[1]] #TODO: Get these from the json resource file
    # createAdminGroup()
    # createAdminGroupPolicy()
    for username in usernames:
        createUser(username)
        addConsolePermissionsForUser(username)
        # addUsertoAdminGroup(username)