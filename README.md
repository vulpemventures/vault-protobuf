# vault-protobuf
`vault-server` protocol buffer file.

## Translate HTTP/1.x in HTTP/2
These client stub files were generated for MacOS.  </br>
You can download and install the `protoc-gen-grpc-web` protoc [plugin](https://github.com/grpc/grpc-web#code-generator-plugin) and run the following command into `vault-protobuf` folder to generate the proto messages and the service client stub from your .proto definitions:

```sh
$ protoc service.proto --js_out=import_style=commonjs,binary:./ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./
```