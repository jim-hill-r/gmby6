# Run this script as `iam-mutator` role
import random
import string

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

def createAdminGroup():
    iam = boto3.client('iam')
    name = 'gmby6-iam-admin'
    print(f'Creating group `{name}``...')
    try:
        iam.create_group(GroupName=name)
        print(f'Group `{name}` created.')
    except:
        print(f'Group {name} probably already exists, not creating.')

def createAdminGroupPolicy():
    iam = boto3.client('iam')
    name = 'gmby6-iam-fullaccess'
    print(f'Creating policy `{name}`...')
    try:
        iam.put_group_policy(
            GroupName='gmby6-iam-admin',
            PolicyName='gmby6-iam-fullaccess',
            PolicyDocument='{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "iam:*", "organizations:DescribeAccount", "organizations:DescribeOrganization", "organizations:DescribeOrganizationalUnit", "organizations:DescribePolicy", "organizations:ListChildren", "organizations:ListParents", "organizations:ListPoliciesForTarget", "organizations:ListRoots", "organizations:ListPolicies", "organizations:ListTargetsForPolicy" ], "Resource": "*" } ] }'
        )
        print(f'Policy `{name}` created.')
    except:
        print(f'Policy {name} probably already exists, not creating.')

def addUsertoAdminGroup(username):
    iam = boto3.client('iam')
    groupname = 'gmby6-iam-admin'
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
    usernames = ['jim-hill-r','geryonghost'] #TODO: Get these from the json resource file
    createAdminGroup()
    createAdminGroupPolicy()
    for username in usernames:
        createUser(username)
        addConsolePermissionsForUser(username)
        addUsertoAdminGroup(username)