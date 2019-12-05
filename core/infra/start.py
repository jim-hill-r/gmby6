# Run this script as `root user`. This is the only script that should ever be run as root user.
# Creats the first IAM admin that can add additional IAM users/roles/groups/etc..

try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

def createIamMutatorRole():
    print(f'Creating `iam-mutator` role...')

    print(f'`iam-mutator` role created.')

def createUser(username):
    print(f'Creating user {username}...')
    iam = boto3.client('iam')
    try:
        iam.create_user(UserName=username)
        print(f'User {username} created.')
    except:
        print(f'User {username} probably already exists, not creating.')

def allowUserAccessToIamMutatorRole(username):
    print(f'Adding {username} to IAM admin role...')

    print(f'User {username} added.')

if __name__ == '__main__':
    primaryUserName = 'jimhill'
    createIamMutatorRole()
    createUser(primaryUserName)
    allowUserAccessToIamMutatorRole(primaryUserName)