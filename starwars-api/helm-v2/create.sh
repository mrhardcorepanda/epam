namespace=$1

if [ -z "${namespace}" ]
then
    echo "Missing the 'Namespace' parameter. Taking the default one which is 'development'"
    namespace="development"
fi

helm upgrade --install --namespace ${namespace} starwars-api-${namespace} .