package me.thomashansen.java;

import japa.parser.ast.Node;
import japa.parser.ast.PackageDeclaration;
import japa.parser.ast.body.ClassOrInterfaceDeclaration;
import japa.parser.ast.body.MethodDeclaration;
import japa.parser.ast.body.Parameter;
import japa.parser.ast.expr.MethodCallExpr;
import japa.parser.ast.visitor.VoidVisitorAdapter;

/**
 * Simple visitor implementation for visiting MethodDeclaration nodes.
 */
class MethodVisitor extends VoidVisitorAdapter<Data>
{
	String currenPackage = "default";
	Entity currentEntity = null;
	Function currentFunction = null;
	
	MethodVisitor() {
		
	}
	
	@Override
	public void visit(PackageDeclaration pd, Data d)
	{
		currenPackage = pd.getName().toString();
	}
	
	@Override
	public void visit(ClassOrInterfaceDeclaration coid, Data d)
	{
//		System.out.println(coid.getBeginLine());
//		System.out.println(coid.getEndLine());
//		System.out.println(coid.getName());
		String type = coid.isInterface() ? "interface" : "class";
		currentEntity = new Entity(coid.getName(), type, coid);
		currentEntity.group = currenPackage;
		d.put(coid.getName(), currentEntity);
		vistChilden(coid, d);
	}
	
	@Override
	public void visit(MethodDeclaration n, Data d)
	{
//		System.out.println(n.getBeginLine());
//		System.out.println(n.getName());
		currentFunction = new Function(n.getName(), n);
		if (n.getParameters() != null) {
			for (Parameter p : n.getParameters() ) {
				String[] parts = p.toString().split(" ");
				currentFunction.args.add(new FParameter(parts[1], parts[0]));
			}
		}
		currentEntity.functions.add(currentFunction);
		vistChilden(n, d);
	}
	
	@Override
	public void visit(MethodCallExpr n, Data d)
	{
		if (currentFunction == null)
			return;
		
		FunctionCall fc = currentFunction.usage.get(n.getName());
		if (fc == null) {
			fc = new FunctionCall(n.getName());
			currentFunction.usage.put(n.getName(), fc);
		}
		
		fc.add(n.getBeginLine());
		
//		System.out.println(n);
	}
	
	public void vistChilden(Node node, Data d)
	{
		for(Node n : node.getChildrenNodes() ) {
			n.accept(this, d);
		}
	}
}
