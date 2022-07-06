import * as datadog from '@pulumi/datadog'
import * as pulumi from '@pulumi/pulumi'

interface MyConfig {
  readonly foo: string
}

const config = new pulumi.Config().requireObject<MyConfig>('config')

console.log('config.foo', config.foo)

const user = new datadog.User('my-policy', {
  email: 'new@example.com',
  name: 'New User',
})
