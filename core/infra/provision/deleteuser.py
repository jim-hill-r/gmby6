# Run this script as `iam-mutator` role
import sys

try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

def deleteUser(username):
    print(f'Deleting user {username}...')
    iam = boto3.client('iam')
 
    #DELETE LOGIN PROFILE
    try:
        iam.delete_login_profile(UserName=username)
        print(f'Login Profile for {username} deleted')
    except:
        print(f'Login Profile does not exist')
 
    #REMOVE USER FROM GROUPS
    try:
        userGroups = iam.list_groups_for_user(UserName=username)
        for groupName in userGroups['Groups']:
            iam.remove_user_from_group(UserName=username,GroupName=groupName['GroupName'])
        print(f'User groups deleted')
    except:
        print(f'User is not assigned any groups')

    #DELETE USER ACCESS KEYS
    try:
        accessKeys = iam.list_access_keys(UserName=username)
        for accessKey in accessKeys['AccessKeyMetadata']:
            iam.delete_access_key(UserName=username,AccessKeyId=accessKey['AccessKeyId'])
            print(f'User access keys deleted')
    except:
        print(f'User is not assigned any access keys')  
        
# Signing certificate ( DeleteSigningCertificate )  
# SSH public key ( DeleteSSHPublicKey )
# Git credentials ( DeleteServiceSpecificCredential )
# Multi-factor authentication (MFA) device ( DeactivateMFADevice , DeleteVirtualMFADevice )
# Inline policies ( DeleteUserPolicy )
# Attached managed policies ( DetachUserPolicy )

    #DELETE USER
    try:
        iam.delete_user(UserName=username)
        print(f'User deleted')
    except:
        print(f'Failed to delete user')

if __name__ == '__main__':
    usernames = [sys.argv[1]] #TODO: Get these from the json resource file
    for username in usernames:
        deleteUser(username)