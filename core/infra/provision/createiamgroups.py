# Run this script as `iam-mutator` role
import random
import string

try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

# Create IAM Group - IAM All Users
iam = boto3.client('iam')
name = 'gmby6-iam-allusers'
print(f'Creating group `{name}``...')
try:
    iam.create_group(GroupName=name)
    print(f'Group `{name}` created.')
except:
    print(f'Group {name} probably already exists, not creating.')

# Create IAM Group - IAM Admin
iam = boto3.client('iam')
name = 'gmby6-iam-admin'
print(f'Creating group `{name}``...')
try:
    iam.create_group(GroupName=name)
    print(f'Group `{name}` created.')
except:
    print(f'Group {name} probably already exists, not creating.')
    
# Create IAM Group - IAM Admin
iam = boto3.client('iam')
name = 'gmby6-admin-readonly'
print(f'Creating group `{name}``...')
try:
    iam.create_group(GroupName=name)
    print(f'Group `{name}` created.')
except:
    print(f'Group {name} probably already exists, not creating.')
    
# Create IAM Group - Cognito Admin
iam = boto3.client('iam')
name = 'gmby6-cognito-admin'
print(f'Creating group `{name}``...')
try:
    iam.create_group(GroupName=name)
    print(f'Group `{name}` created.')
except:
    print(f'Group {name} probably already exists, not creating.')
    
# Create IAM Group - Cloudfront Admin
iam = boto3.client('iam')
name = 'gmby6-cloudfront-admin'
print(f'Creating group `{name}``...')
try:
    iam.create_group(GroupName=name)
    print(f'Group `{name}` created.')
except:
    print(f'Group {name} probably already exists, not creating.')
    
# Create IAM Group - S3 Admin
iam = boto3.client('iam')
name = 'gmby6-s3-admin'
print(f'Creating group `{name}``...')
try:
    iam.create_group(GroupName=name)
    print(f'Group `{name}` created.')
except:
    print(f'Group {name} probably already exists, not creating.')