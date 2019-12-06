try:
   import boto3
except ImportError:
   print(f'Error: boto3 is required. Please install.')
   print(f'Try: pip install boto3')

def createGraphQL():
    appsync = boto3.client('appsync')
    print(f'Creating graphQL in appsync...')
    appsync.create_graphql_api(name='gmby6-gql',authenticationType='API_KEY')
    print(f'GraphQL created.')

if __name__ == '__main__':
    createGraphQL()