# Run this script as `iam-mutator` role
import sys

try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

def createAccessKey(username):
    print(f'Creating access key for {username}...')
    iam = boto3.client('iam')
    try:
        response = iam.create_access_key(UserName=username)
        print(response)
        print(f'Access key for {username} created.')
    except:
        print(f'User {username} probably already exists, not creating.')

# def addConsolePermissionsForUser(username):
    # #TODO: Check if login permissions exist. If so, skip.
    # print(f'Adding login permissions for {username}...')
    # iam = boto3.client('iam')
    # password = randomString()
    # iam.create_login_profile(UserName=username,Password=password,PasswordResetRequired=True)
    # print(f'Added login permissions for {username}. Password is {password}.')

if __name__ == '__main__':
    usernames = [sys.argv[1]] #TODO: Get these from the json resource file
    # createAdminGroup()
    # createAdminGroupPolicy()
    for username in usernames:
        createAccessKey(username)
        # addConsolePermissionsForUser(username)
        # addUsertoAdminGroup(username)