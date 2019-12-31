# Run this script as `iam-mutator` role
import sys

try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

def addroleAdminRO(username):
    iam = boto3.client('iam')
    groupname = 'gmby6-admin-readonly'
    print(f'Adding user `{username}` to group `{groupname}`...')
    try:
        iam.add_user_to_group(
            GroupName=groupname,
            UserName=username
        )
        print(f'Added user `{username}` to group `{groupname}`.')
    except:
        print(f'Something went wrong.')

if __name__ == '__main__':
    usernames = [sys.argv[1]] #TODO: Get these from the json resource file
    for username in usernames:
        addroleAdminRO(username)