import base64

try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

def getApiId(name,region):
    appsync = boto3.client('appsync',region_name=region)
    response = appsync.list_graphql_apis()
    for api in response['graphqlApis']:
        if(api['name'] == name):
            return api['apiId']

def deploySchema(apiId,region):
    appsync = boto3.client('appsync',region_name=region)
    f=open('../src/schema.graphql', 'r')
    schema = f.read()
    print(schema)
    schemaBlob = base64.b64encode(bytes(schema, 'utf-8'))
    response = appsync.start_schema_creation(apiId=apiId,definition=schemaBlob)

def deploy():
    name = 'gmby6-gql'
    region = 'us-east-2'
    apiId = getApiId(name,region)
    print(f'Deploying schema')
    deploySchema(apiId,region)

if __name__ == '__main__':
    deploy()
