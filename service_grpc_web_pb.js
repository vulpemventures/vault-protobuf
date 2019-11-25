/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.service = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.VulpemVaultClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.VulpemVaultPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.NewMultiSigRequest,
 *   !proto.service.NewMultiSigReply>}
 */
const methodDescriptor_VulpemVault_NewMultiSig = new grpc.web.MethodDescriptor(
  '/service.VulpemVault/NewMultiSig',
  grpc.web.MethodType.UNARY,
  proto.service.NewMultiSigRequest,
  proto.service.NewMultiSigReply,
  /**
   * @param {!proto.service.NewMultiSigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.NewMultiSigReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.NewMultiSigRequest,
 *   !proto.service.NewMultiSigReply>}
 */
const methodInfo_VulpemVault_NewMultiSig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.NewMultiSigReply,
  /**
   * @param {!proto.service.NewMultiSigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.NewMultiSigReply.deserializeBinary
);


/**
 * @param {!proto.service.NewMultiSigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.NewMultiSigReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.NewMultiSigReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.VulpemVaultClient.prototype.newMultiSig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.VulpemVault/NewMultiSig',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_NewMultiSig,
      callback);
};


/**
 * @param {!proto.service.NewMultiSigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.NewMultiSigReply>}
 *     A native promise that resolves to the response
 */
proto.service.VulpemVaultPromiseClient.prototype.newMultiSig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.VulpemVault/NewMultiSig',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_NewMultiSig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.SetupMfaRequest,
 *   !proto.service.SetupMfaReply>}
 */
const methodDescriptor_VulpemVault_SetupMfa = new grpc.web.MethodDescriptor(
  '/service.VulpemVault/SetupMfa',
  grpc.web.MethodType.UNARY,
  proto.service.SetupMfaRequest,
  proto.service.SetupMfaReply,
  /**
   * @param {!proto.service.SetupMfaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.SetupMfaReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.SetupMfaRequest,
 *   !proto.service.SetupMfaReply>}
 */
const methodInfo_VulpemVault_SetupMfa = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.SetupMfaReply,
  /**
   * @param {!proto.service.SetupMfaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.SetupMfaReply.deserializeBinary
);


/**
 * @param {!proto.service.SetupMfaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.SetupMfaReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.SetupMfaReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.VulpemVaultClient.prototype.setupMfa =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.VulpemVault/SetupMfa',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_SetupMfa,
      callback);
};


/**
 * @param {!proto.service.SetupMfaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.SetupMfaReply>}
 *     A native promise that resolves to the response
 */
proto.service.VulpemVaultPromiseClient.prototype.setupMfa =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.VulpemVault/SetupMfa',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_SetupMfa);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.GenerateOtpRequest,
 *   !proto.service.GenerateOtpReply>}
 */
const methodDescriptor_VulpemVault_GenerateOtp = new grpc.web.MethodDescriptor(
  '/service.VulpemVault/GenerateOtp',
  grpc.web.MethodType.UNARY,
  proto.service.GenerateOtpRequest,
  proto.service.GenerateOtpReply,
  /**
   * @param {!proto.service.GenerateOtpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.GenerateOtpReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.GenerateOtpRequest,
 *   !proto.service.GenerateOtpReply>}
 */
const methodInfo_VulpemVault_GenerateOtp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.GenerateOtpReply,
  /**
   * @param {!proto.service.GenerateOtpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.GenerateOtpReply.deserializeBinary
);


/**
 * @param {!proto.service.GenerateOtpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.GenerateOtpReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.GenerateOtpReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.VulpemVaultClient.prototype.generateOtp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.VulpemVault/GenerateOtp',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_GenerateOtp,
      callback);
};


/**
 * @param {!proto.service.GenerateOtpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.GenerateOtpReply>}
 *     A native promise that resolves to the response
 */
proto.service.VulpemVaultPromiseClient.prototype.generateOtp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.VulpemVault/GenerateOtp',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_GenerateOtp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.VerifyOtpRequest,
 *   !proto.service.VerifyOtpReply>}
 */
const methodDescriptor_VulpemVault_VerifyOtp = new grpc.web.MethodDescriptor(
  '/service.VulpemVault/VerifyOtp',
  grpc.web.MethodType.UNARY,
  proto.service.VerifyOtpRequest,
  proto.service.VerifyOtpReply,
  /**
   * @param {!proto.service.VerifyOtpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.VerifyOtpReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.VerifyOtpRequest,
 *   !proto.service.VerifyOtpReply>}
 */
const methodInfo_VulpemVault_VerifyOtp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.VerifyOtpReply,
  /**
   * @param {!proto.service.VerifyOtpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.VerifyOtpReply.deserializeBinary
);


/**
 * @param {!proto.service.VerifyOtpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.VerifyOtpReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.VerifyOtpReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.VulpemVaultClient.prototype.verifyOtp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.VulpemVault/VerifyOtp',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_VerifyOtp,
      callback);
};


/**
 * @param {!proto.service.VerifyOtpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.VerifyOtpReply>}
 *     A native promise that resolves to the response
 */
proto.service.VulpemVaultPromiseClient.prototype.verifyOtp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.VulpemVault/VerifyOtp',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_VerifyOtp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.NewUnsignedTxRequest,
 *   !proto.service.NewUnsignedTxReply>}
 */
const methodDescriptor_VulpemVault_NewUnsignedTx = new grpc.web.MethodDescriptor(
  '/service.VulpemVault/NewUnsignedTx',
  grpc.web.MethodType.UNARY,
  proto.service.NewUnsignedTxRequest,
  proto.service.NewUnsignedTxReply,
  /**
   * @param {!proto.service.NewUnsignedTxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.NewUnsignedTxReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.NewUnsignedTxRequest,
 *   !proto.service.NewUnsignedTxReply>}
 */
const methodInfo_VulpemVault_NewUnsignedTx = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.NewUnsignedTxReply,
  /**
   * @param {!proto.service.NewUnsignedTxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.NewUnsignedTxReply.deserializeBinary
);


/**
 * @param {!proto.service.NewUnsignedTxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.NewUnsignedTxReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.NewUnsignedTxReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.VulpemVaultClient.prototype.newUnsignedTx =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.VulpemVault/NewUnsignedTx',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_NewUnsignedTx,
      callback);
};


/**
 * @param {!proto.service.NewUnsignedTxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.NewUnsignedTxReply>}
 *     A native promise that resolves to the response
 */
proto.service.VulpemVaultPromiseClient.prototype.newUnsignedTx =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.VulpemVault/NewUnsignedTx',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_NewUnsignedTx);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.BroadcastTxRequest,
 *   !proto.service.BroadcastTxReply>}
 */
const methodDescriptor_VulpemVault_BroadcastTx = new grpc.web.MethodDescriptor(
  '/service.VulpemVault/BroadcastTx',
  grpc.web.MethodType.UNARY,
  proto.service.BroadcastTxRequest,
  proto.service.BroadcastTxReply,
  /**
   * @param {!proto.service.BroadcastTxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.BroadcastTxReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.BroadcastTxRequest,
 *   !proto.service.BroadcastTxReply>}
 */
const methodInfo_VulpemVault_BroadcastTx = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.BroadcastTxReply,
  /**
   * @param {!proto.service.BroadcastTxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.BroadcastTxReply.deserializeBinary
);


/**
 * @param {!proto.service.BroadcastTxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.BroadcastTxReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.BroadcastTxReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.VulpemVaultClient.prototype.broadcastTx =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.VulpemVault/BroadcastTx',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_BroadcastTx,
      callback);
};


/**
 * @param {!proto.service.BroadcastTxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.BroadcastTxReply>}
 *     A native promise that resolves to the response
 */
proto.service.VulpemVaultPromiseClient.prototype.broadcastTx =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.VulpemVault/BroadcastTx',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_BroadcastTx);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.HealthCheckRequest,
 *   !proto.service.HealthCheckReply>}
 */
const methodDescriptor_VulpemVault_HealthCheck = new grpc.web.MethodDescriptor(
  '/service.VulpemVault/HealthCheck',
  grpc.web.MethodType.UNARY,
  proto.service.HealthCheckRequest,
  proto.service.HealthCheckReply,
  /**
   * @param {!proto.service.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.HealthCheckReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.HealthCheckRequest,
 *   !proto.service.HealthCheckReply>}
 */
const methodInfo_VulpemVault_HealthCheck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.HealthCheckReply,
  /**
   * @param {!proto.service.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.HealthCheckReply.deserializeBinary
);


/**
 * @param {!proto.service.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.HealthCheckReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.HealthCheckReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.VulpemVaultClient.prototype.healthCheck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.VulpemVault/HealthCheck',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_HealthCheck,
      callback);
};


/**
 * @param {!proto.service.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.HealthCheckReply>}
 *     A native promise that resolves to the response
 */
proto.service.VulpemVaultPromiseClient.prototype.healthCheck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.VulpemVault/HealthCheck',
      request,
      metadata || {},
      methodDescriptor_VulpemVault_HealthCheck);
};


module.exports = proto.service;

