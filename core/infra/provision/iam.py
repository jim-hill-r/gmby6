# Run this script as `iam-mutator` role

try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

def createUser(username):
    print(f'Creating user {username}...')
    iam = boto3.client('iam')
    try:
        iam.create_user(UserName=username)
        print(f'User {username} created.')
    except:
        print(f'User {username} probably already exists, not creating.')

if __name__ == '__main__':
    usernames = ['jim-hill-r','stevenhill'] #TODO: Get these from the json resource file
    for username in usernames:
        createUser(username)