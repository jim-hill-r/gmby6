# Run this script as `iam-mutator` role
import random
import string

try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

# Add IAM Policy - IAM All Users - IAM Change Password
iam = boto3.client('iam')
name = 'gmby6-iam-changepassword'
print(f'Creating policy `{name}`...')
try:
    iam.put_group_policy(
        GroupName='gmby6-iam-allusers',
        PolicyName='gmby6-iam-allusers',
        PolicyDocument='{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": "iam:GetAccountPasswordPolicy", "Resource": "*" }, { "Effect": "Allow", "Action": "iam:ChangePassword", "Resource": "arn:aws:iam::495061956683:user/${aws:username}" }, { "Effect": "Allow", "Action": "iam:ListAccessKeys", "Resource": "arn:aws:iam::495061956683:user/${aws:username}" } ] }')
    print(f'Policy `{name}` created.')
except:
    print(f'Policy {name} probably already exists, not creating.')

# Add IAM Policy - IAM Admin
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
    
# Add IAM Policy - Admin Readonly
iam = boto3.client('iam')
name = 'gmby6-admin-readonly'
print(f'Creating policy `{name}`...')
try:
    iam.attach_group_policy(
        GroupName='gmby6-admin-readonly',
        PolicyArn='arn:aws:iam::aws:policy/ReadOnlyAccess'
    )
    print(f'Policy `{name}` created.')
except:
    print(f'Policy {name} probably already exists, not creating.')
    
# Add IAM Policy - Cognito Admin
iam = boto3.client('iam')
name = 'gmby6-cognito-admin'
print(f'Creating policy `{name}`...')
try:
    iam.attach_group_policy(
        GroupName='gmby6-cognito-admin',
        PolicyArn='arn:aws:iam::aws:policy/AmazonCognitoPowerUser'
    )
    print(f'Policy `{name}` created.')
except:
    print(f'Policy {name} probably already exists, not creating.')
    
# Add IAM Policy - Cloudfront Admin
iam = boto3.client('iam')
name = 'gmby6-cloudfront-admin'
print(f'Creating policy `{name}`...')
try:
    iam.attach_group_policy(
        GroupName='gmby6-cloudfront-admin',
        PolicyArn='arn:aws:iam::aws:policy/CloudFrontFullAccess'
    )
    print(f'Policy `{name}` created.')
except:
    print(f'Policy {name} probably already exists, not creating.')
    
# Add IAM Policy - S3 Admin
iam = boto3.client('iam')
name = 'gmby6-s3-admin'
print(f'Creating policy `{name}`...')
try:
    iam.attach_group_policy(
        GroupName='gmby6-s3-admin',
        PolicyArn='arn:aws:iam::aws:policy/AmazonS3FullAccess'
    )
    print(f'Policy `{name}` created.')
except:
    print(f'Policy {name} probably already exists, not creating.')