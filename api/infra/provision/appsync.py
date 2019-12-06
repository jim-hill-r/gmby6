try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

def createGraphQL(region):
   name = 'gmby6-gql'
   appsync = boto3.client('appsync',region_name=region)
   print(f'Creating graphQL in appsync...')
   response = appsync.list_graphql_apis()
   for api in response['graphqlApis']:
      if(api['name'] == name):
         print(f'GraphQL {name} already exists.')
         return
   appsync.create_graphql_api(name=name,authenticationType='AWS_IAM')
   print(f'GraphQL created.')

if __name__ == '__main__':
    createGraphQL('us-east-2')