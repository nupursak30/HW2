let subject = require('/home/vagrant/HW2/subject.js')
let mock = require('mock-fs');
try { subject.inc(-1, undefined); } catch (e) {} 
try { subject.inc(-1, NaN); } catch (e) {} 
try { subject.inc(01, undefined); } catch (e) {} 
try { subject.inc(01, NaN); } catch (e) {} 
try { subject.inc(NaN, undefined); } catch (e) {} 
try { subject.inc(NaN, NaN); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 421, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 421, "werw"); } catch (e) {} 
try { subject.weird(6, -1, 421, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, NaN, "strict"); } catch (e) {} 
try { subject.weird(6, -1, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, NaN, "werw"); } catch (e) {} 
try { subject.weird(6, -1, NaN, "strict"); } catch (e) {} 
try { subject.weird(6, -1, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 01, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 01, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 01, 41, "werw"); } catch (e) {} 
try { subject.weird(6, 01, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 01, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 01, 421, "strict"); } catch (e) {} 
try { subject.weird(6, 01, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 01, 421, "werw"); } catch (e) {} 
try { subject.weird(6, 01, 421, "strict"); } catch (e) {} 
try { subject.weird(6, 01, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 01, NaN, "strict"); } catch (e) {} 
try { subject.weird(6, 01, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 01, NaN, "werw"); } catch (e) {} 
try { subject.weird(6, 01, NaN, "strict"); } catch (e) {} 
try { subject.weird(6, 01, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, NaN, 41, "strict"); } catch (e) {} 
try { subject.weird(6, NaN, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, NaN, 41, "werw"); } catch (e) {} 
try { subject.weird(6, NaN, 41, "strict"); } catch (e) {} 
try { subject.weird(6, NaN, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, NaN, 421, "strict"); } catch (e) {} 
try { subject.weird(6, NaN, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, NaN, 421, "werw"); } catch (e) {} 
try { subject.weird(6, NaN, 421, "strict"); } catch (e) {} 
try { subject.weird(6, NaN, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, NaN, NaN, "strict"); } catch (e) {} 
try { subject.weird(6, NaN, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, NaN, NaN, "werw"); } catch (e) {} 
try { subject.weird(6, NaN, NaN, "strict"); } catch (e) {} 
try { subject.weird(6, NaN, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(71, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(71, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(71, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, -1, 421, "strict"); } catch (e) {} 
try { subject.weird(71, -1, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, -1, 421, "werw"); } catch (e) {} 
try { subject.weird(71, -1, 421, "strict"); } catch (e) {} 
try { subject.weird(71, -1, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, -1, NaN, "strict"); } catch (e) {} 
try { subject.weird(71, -1, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, -1, NaN, "werw"); } catch (e) {} 
try { subject.weird(71, -1, NaN, "strict"); } catch (e) {} 
try { subject.weird(71, -1, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, 01, 41, "strict"); } catch (e) {} 
try { subject.weird(71, 01, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, 01, 41, "werw"); } catch (e) {} 
try { subject.weird(71, 01, 41, "strict"); } catch (e) {} 
try { subject.weird(71, 01, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, 01, 421, "strict"); } catch (e) {} 
try { subject.weird(71, 01, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, 01, 421, "werw"); } catch (e) {} 
try { subject.weird(71, 01, 421, "strict"); } catch (e) {} 
try { subject.weird(71, 01, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, 01, NaN, "strict"); } catch (e) {} 
try { subject.weird(71, 01, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, 01, NaN, "werw"); } catch (e) {} 
try { subject.weird(71, 01, NaN, "strict"); } catch (e) {} 
try { subject.weird(71, 01, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, NaN, 41, "strict"); } catch (e) {} 
try { subject.weird(71, NaN, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, NaN, 41, "werw"); } catch (e) {} 
try { subject.weird(71, NaN, 41, "strict"); } catch (e) {} 
try { subject.weird(71, NaN, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, NaN, 421, "strict"); } catch (e) {} 
try { subject.weird(71, NaN, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, NaN, 421, "werw"); } catch (e) {} 
try { subject.weird(71, NaN, 421, "strict"); } catch (e) {} 
try { subject.weird(71, NaN, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, NaN, NaN, "strict"); } catch (e) {} 
try { subject.weird(71, NaN, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(71, NaN, NaN, "werw"); } catch (e) {} 
try { subject.weird(71, NaN, NaN, "strict"); } catch (e) {} 
try { subject.weird(71, NaN, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(NaN, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(NaN, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(NaN, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, -1, 421, "strict"); } catch (e) {} 
try { subject.weird(NaN, -1, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, -1, 421, "werw"); } catch (e) {} 
try { subject.weird(NaN, -1, 421, "strict"); } catch (e) {} 
try { subject.weird(NaN, -1, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, -1, NaN, "strict"); } catch (e) {} 
try { subject.weird(NaN, -1, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, -1, NaN, "werw"); } catch (e) {} 
try { subject.weird(NaN, -1, NaN, "strict"); } catch (e) {} 
try { subject.weird(NaN, -1, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, 01, 41, "strict"); } catch (e) {} 
try { subject.weird(NaN, 01, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, 01, 41, "werw"); } catch (e) {} 
try { subject.weird(NaN, 01, 41, "strict"); } catch (e) {} 
try { subject.weird(NaN, 01, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, 01, 421, "strict"); } catch (e) {} 
try { subject.weird(NaN, 01, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, 01, 421, "werw"); } catch (e) {} 
try { subject.weird(NaN, 01, 421, "strict"); } catch (e) {} 
try { subject.weird(NaN, 01, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, 01, NaN, "strict"); } catch (e) {} 
try { subject.weird(NaN, 01, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, 01, NaN, "werw"); } catch (e) {} 
try { subject.weird(NaN, 01, NaN, "strict"); } catch (e) {} 
try { subject.weird(NaN, 01, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, NaN, 41, "strict"); } catch (e) {} 
try { subject.weird(NaN, NaN, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, NaN, 41, "werw"); } catch (e) {} 
try { subject.weird(NaN, NaN, 41, "strict"); } catch (e) {} 
try { subject.weird(NaN, NaN, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, NaN, 421, "strict"); } catch (e) {} 
try { subject.weird(NaN, NaN, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, NaN, 421, "werw"); } catch (e) {} 
try { subject.weird(NaN, NaN, 421, "strict"); } catch (e) {} 
try { subject.weird(NaN, NaN, 421, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, NaN, NaN, "strict"); } catch (e) {} 
try { subject.weird(NaN, NaN, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, NaN, NaN, "werw"); } catch (e) {} 
try { subject.weird(NaN, NaN, NaN, "strict"); } catch (e) {} 
try { subject.weird(NaN, NaN, NaN, 'NEQ - strict'); } catch (e) {} 
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try { subject.normalize(''); } catch (e) {} 
try { subject.format('', '', true); } catch (e) {} 
try { subject.format('', '', false); } catch (e) {} 
try { subject.format('', '', {"normalize":true}); } catch (e) {} 
try { subject.format('', '', {"normalize":false}); } catch (e) {} 
try { subject.blackListNumber('212-065-9024'); } catch (e) {} 
try { subject.blackListNumber('405-065-9024'); } catch (e) {} 
